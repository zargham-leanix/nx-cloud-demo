import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo28Component } from './lib7-demo28.component';

describe('Lib7Demo28Component', () => {
  let component: Lib7Demo28Component;
  let fixture: ComponentFixture<Lib7Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
