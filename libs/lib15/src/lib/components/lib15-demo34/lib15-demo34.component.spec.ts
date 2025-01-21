import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo34Component } from './lib15-demo34.component';

describe('Lib15Demo34Component', () => {
  let component: Lib15Demo34Component;
  let fixture: ComponentFixture<Lib15Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
