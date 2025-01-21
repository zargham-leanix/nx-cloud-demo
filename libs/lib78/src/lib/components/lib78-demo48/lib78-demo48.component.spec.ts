import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo48Component } from './lib78-demo48.component';

describe('Lib78Demo48Component', () => {
  let component: Lib78Demo48Component;
  let fixture: ComponentFixture<Lib78Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
