import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo4Component } from './lib28-demo4.component';

describe('Lib28Demo4Component', () => {
  let component: Lib28Demo4Component;
  let fixture: ComponentFixture<Lib28Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
