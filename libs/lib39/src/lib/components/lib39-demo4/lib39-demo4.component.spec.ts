import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo4Component } from './lib39-demo4.component';

describe('Lib39Demo4Component', () => {
  let component: Lib39Demo4Component;
  let fixture: ComponentFixture<Lib39Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
