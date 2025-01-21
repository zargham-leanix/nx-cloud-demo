import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo20Component } from './lib1-demo20.component';

describe('Lib1Demo20Component', () => {
  let component: Lib1Demo20Component;
  let fixture: ComponentFixture<Lib1Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
