import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo19Component } from './lib67-demo19.component';

describe('Lib67Demo19Component', () => {
  let component: Lib67Demo19Component;
  let fixture: ComponentFixture<Lib67Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
