import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo31Component } from './lib65-demo31.component';

describe('Lib65Demo31Component', () => {
  let component: Lib65Demo31Component;
  let fixture: ComponentFixture<Lib65Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
