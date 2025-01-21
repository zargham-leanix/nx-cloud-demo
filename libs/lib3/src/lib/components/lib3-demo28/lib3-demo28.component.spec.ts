import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo28Component } from './lib3-demo28.component';

describe('Lib3Demo28Component', () => {
  let component: Lib3Demo28Component;
  let fixture: ComponentFixture<Lib3Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
