import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo42Component } from './lib78-demo42.component';

describe('Lib78Demo42Component', () => {
  let component: Lib78Demo42Component;
  let fixture: ComponentFixture<Lib78Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
