import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo28Component } from './lib38-demo28.component';

describe('Lib38Demo28Component', () => {
  let component: Lib38Demo28Component;
  let fixture: ComponentFixture<Lib38Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
