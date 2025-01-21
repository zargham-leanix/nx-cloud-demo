import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo15Component } from './lib39-demo15.component';

describe('Lib39Demo15Component', () => {
  let component: Lib39Demo15Component;
  let fixture: ComponentFixture<Lib39Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
