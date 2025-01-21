import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo28Component } from './lib13-demo28.component';

describe('Lib13Demo28Component', () => {
  let component: Lib13Demo28Component;
  let fixture: ComponentFixture<Lib13Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
