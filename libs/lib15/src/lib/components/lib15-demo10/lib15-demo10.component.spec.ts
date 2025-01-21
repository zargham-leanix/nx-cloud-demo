import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo10Component } from './lib15-demo10.component';

describe('Lib15Demo10Component', () => {
  let component: Lib15Demo10Component;
  let fixture: ComponentFixture<Lib15Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
