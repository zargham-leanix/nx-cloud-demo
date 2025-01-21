import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo26Component } from './lib39-demo26.component';

describe('Lib39Demo26Component', () => {
  let component: Lib39Demo26Component;
  let fixture: ComponentFixture<Lib39Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
