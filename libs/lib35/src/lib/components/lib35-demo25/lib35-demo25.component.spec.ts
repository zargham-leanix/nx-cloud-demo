import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo25Component } from './lib35-demo25.component';

describe('Lib35Demo25Component', () => {
  let component: Lib35Demo25Component;
  let fixture: ComponentFixture<Lib35Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
