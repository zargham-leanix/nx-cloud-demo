import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo28Component } from './lib2-demo28.component';

describe('Lib2Demo28Component', () => {
  let component: Lib2Demo28Component;
  let fixture: ComponentFixture<Lib2Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
