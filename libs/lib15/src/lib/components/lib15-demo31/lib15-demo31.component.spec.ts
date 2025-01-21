import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo31Component } from './lib15-demo31.component';

describe('Lib15Demo31Component', () => {
  let component: Lib15Demo31Component;
  let fixture: ComponentFixture<Lib15Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
