import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo28Component } from './lib17-demo28.component';

describe('Lib17Demo28Component', () => {
  let component: Lib17Demo28Component;
  let fixture: ComponentFixture<Lib17Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
