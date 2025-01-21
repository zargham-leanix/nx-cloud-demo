import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo46Component } from './lib35-demo46.component';

describe('Lib35Demo46Component', () => {
  let component: Lib35Demo46Component;
  let fixture: ComponentFixture<Lib35Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
