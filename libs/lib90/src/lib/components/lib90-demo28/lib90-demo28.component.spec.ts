import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo28Component } from './lib90-demo28.component';

describe('Lib90Demo28Component', () => {
  let component: Lib90Demo28Component;
  let fixture: ComponentFixture<Lib90Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
