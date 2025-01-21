import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo28Component } from './lib70-demo28.component';

describe('Lib70Demo28Component', () => {
  let component: Lib70Demo28Component;
  let fixture: ComponentFixture<Lib70Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
