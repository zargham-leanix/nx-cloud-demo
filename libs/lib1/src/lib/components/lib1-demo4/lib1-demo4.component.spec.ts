import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo4Component } from './lib1-demo4.component';

describe('Lib1Demo4Component', () => {
  let component: Lib1Demo4Component;
  let fixture: ComponentFixture<Lib1Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
