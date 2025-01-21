import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo4Component } from './lib53-demo4.component';

describe('Lib53Demo4Component', () => {
  let component: Lib53Demo4Component;
  let fixture: ComponentFixture<Lib53Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
