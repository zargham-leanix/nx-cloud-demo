import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo27Component } from './lib15-demo27.component';

describe('Lib15Demo27Component', () => {
  let component: Lib15Demo27Component;
  let fixture: ComponentFixture<Lib15Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
