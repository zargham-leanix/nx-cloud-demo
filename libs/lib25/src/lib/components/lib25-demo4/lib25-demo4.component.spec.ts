import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo4Component } from './lib25-demo4.component';

describe('Lib25Demo4Component', () => {
  let component: Lib25Demo4Component;
  let fixture: ComponentFixture<Lib25Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
