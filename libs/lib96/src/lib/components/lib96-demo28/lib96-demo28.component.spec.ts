import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo28Component } from './lib96-demo28.component';

describe('Lib96Demo28Component', () => {
  let component: Lib96Demo28Component;
  let fixture: ComponentFixture<Lib96Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
