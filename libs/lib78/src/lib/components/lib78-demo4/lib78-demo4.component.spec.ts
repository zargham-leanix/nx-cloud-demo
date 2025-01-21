import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo4Component } from './lib78-demo4.component';

describe('Lib78Demo4Component', () => {
  let component: Lib78Demo4Component;
  let fixture: ComponentFixture<Lib78Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
