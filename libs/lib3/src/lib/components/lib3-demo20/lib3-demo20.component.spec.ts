import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo20Component } from './lib3-demo20.component';

describe('Lib3Demo20Component', () => {
  let component: Lib3Demo20Component;
  let fixture: ComponentFixture<Lib3Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
