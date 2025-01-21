import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib92Demo28Component } from './lib92-demo28.component';

describe('Lib92Demo28Component', () => {
  let component: Lib92Demo28Component;
  let fixture: ComponentFixture<Lib92Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib92Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib92Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
