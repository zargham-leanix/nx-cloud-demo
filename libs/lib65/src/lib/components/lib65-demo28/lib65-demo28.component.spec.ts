import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo28Component } from './lib65-demo28.component';

describe('Lib65Demo28Component', () => {
  let component: Lib65Demo28Component;
  let fixture: ComponentFixture<Lib65Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
