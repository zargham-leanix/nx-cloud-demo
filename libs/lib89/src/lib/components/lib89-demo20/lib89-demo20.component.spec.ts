import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo20Component } from './lib89-demo20.component';

describe('Lib89Demo20Component', () => {
  let component: Lib89Demo20Component;
  let fixture: ComponentFixture<Lib89Demo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
