import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo23Component } from './lib15-demo23.component';

describe('Lib15Demo23Component', () => {
  let component: Lib15Demo23Component;
  let fixture: ComponentFixture<Lib15Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
