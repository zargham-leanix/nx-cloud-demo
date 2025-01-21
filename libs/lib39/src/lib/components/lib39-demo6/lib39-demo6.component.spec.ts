import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo6Component } from './lib39-demo6.component';

describe('Lib39Demo6Component', () => {
  let component: Lib39Demo6Component;
  let fixture: ComponentFixture<Lib39Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
