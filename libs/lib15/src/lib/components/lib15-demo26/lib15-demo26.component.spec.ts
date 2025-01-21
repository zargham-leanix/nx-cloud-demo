import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo26Component } from './lib15-demo26.component';

describe('Lib15Demo26Component', () => {
  let component: Lib15Demo26Component;
  let fixture: ComponentFixture<Lib15Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
