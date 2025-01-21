import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo23Component } from './lib39-demo23.component';

describe('Lib39Demo23Component', () => {
  let component: Lib39Demo23Component;
  let fixture: ComponentFixture<Lib39Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
