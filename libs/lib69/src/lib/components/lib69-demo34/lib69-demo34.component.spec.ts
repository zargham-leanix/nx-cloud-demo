import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo34Component } from './lib69-demo34.component';

describe('Lib69Demo34Component', () => {
  let component: Lib69Demo34Component;
  let fixture: ComponentFixture<Lib69Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
