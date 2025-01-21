import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo19Component } from './lib15-demo19.component';

describe('Lib15Demo19Component', () => {
  let component: Lib15Demo19Component;
  let fixture: ComponentFixture<Lib15Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
