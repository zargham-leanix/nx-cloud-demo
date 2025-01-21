import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo28Component } from './lib9-demo28.component';

describe('Lib9Demo28Component', () => {
  let component: Lib9Demo28Component;
  let fixture: ComponentFixture<Lib9Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
