import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo28Component } from './lib43-demo28.component';

describe('Lib43Demo28Component', () => {
  let component: Lib43Demo28Component;
  let fixture: ComponentFixture<Lib43Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
