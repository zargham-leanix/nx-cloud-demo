import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo29Component } from './lib70-demo29.component';

describe('Lib70Demo29Component', () => {
  let component: Lib70Demo29Component;
  let fixture: ComponentFixture<Lib70Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
