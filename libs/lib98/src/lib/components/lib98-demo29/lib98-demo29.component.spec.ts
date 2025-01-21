import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo29Component } from './lib98-demo29.component';

describe('Lib98Demo29Component', () => {
  let component: Lib98Demo29Component;
  let fixture: ComponentFixture<Lib98Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
