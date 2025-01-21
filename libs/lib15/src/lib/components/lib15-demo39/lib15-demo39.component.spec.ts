import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo39Component } from './lib15-demo39.component';

describe('Lib15Demo39Component', () => {
  let component: Lib15Demo39Component;
  let fixture: ComponentFixture<Lib15Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
