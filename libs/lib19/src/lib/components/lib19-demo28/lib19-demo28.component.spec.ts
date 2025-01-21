import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo28Component } from './lib19-demo28.component';

describe('Lib19Demo28Component', () => {
  let component: Lib19Demo28Component;
  let fixture: ComponentFixture<Lib19Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
