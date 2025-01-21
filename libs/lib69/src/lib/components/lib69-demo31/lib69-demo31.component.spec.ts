import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo31Component } from './lib69-demo31.component';

describe('Lib69Demo31Component', () => {
  let component: Lib69Demo31Component;
  let fixture: ComponentFixture<Lib69Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
