import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo28Component } from './lib40-demo28.component';

describe('Lib40Demo28Component', () => {
  let component: Lib40Demo28Component;
  let fixture: ComponentFixture<Lib40Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
