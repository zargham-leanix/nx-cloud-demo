import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo12Component } from './lib39-demo12.component';

describe('Lib39Demo12Component', () => {
  let component: Lib39Demo12Component;
  let fixture: ComponentFixture<Lib39Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
