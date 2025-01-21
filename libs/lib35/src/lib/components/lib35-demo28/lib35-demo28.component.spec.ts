import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo28Component } from './lib35-demo28.component';

describe('Lib35Demo28Component', () => {
  let component: Lib35Demo28Component;
  let fixture: ComponentFixture<Lib35Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
