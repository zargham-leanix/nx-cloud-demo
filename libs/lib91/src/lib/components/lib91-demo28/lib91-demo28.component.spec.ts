import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo28Component } from './lib91-demo28.component';

describe('Lib91Demo28Component', () => {
  let component: Lib91Demo28Component;
  let fixture: ComponentFixture<Lib91Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
