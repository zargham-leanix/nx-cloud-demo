import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo46Component } from './lib69-demo46.component';

describe('Lib69Demo46Component', () => {
  let component: Lib69Demo46Component;
  let fixture: ComponentFixture<Lib69Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
