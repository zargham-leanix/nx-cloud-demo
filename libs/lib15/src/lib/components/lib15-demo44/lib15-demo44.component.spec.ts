import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo44Component } from './lib15-demo44.component';

describe('Lib15Demo44Component', () => {
  let component: Lib15Demo44Component;
  let fixture: ComponentFixture<Lib15Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
