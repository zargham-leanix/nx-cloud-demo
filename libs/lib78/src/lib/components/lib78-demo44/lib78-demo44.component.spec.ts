import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo44Component } from './lib78-demo44.component';

describe('Lib78Demo44Component', () => {
  let component: Lib78Demo44Component;
  let fixture: ComponentFixture<Lib78Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
