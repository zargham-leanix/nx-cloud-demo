import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo29Component } from './lib78-demo29.component';

describe('Lib78Demo29Component', () => {
  let component: Lib78Demo29Component;
  let fixture: ComponentFixture<Lib78Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
