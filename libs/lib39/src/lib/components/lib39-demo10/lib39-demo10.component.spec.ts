import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo10Component } from './lib39-demo10.component';

describe('Lib39Demo10Component', () => {
  let component: Lib39Demo10Component;
  let fixture: ComponentFixture<Lib39Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
